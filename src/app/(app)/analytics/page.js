import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Chart from '@/components/Chart';
import SectionBox from '@/components/layouts/SectionBox'
import { Event } from '@/models/Event';
import { Page } from '@/models/Page';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { isToday } from 'date-fns';
import mongoose from 'mongoose';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function AnalyticsPage() {

  mongoose.connect(process.env.MONGO_URI);
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect('/');
  }
  // buscamos las page que coincida con la del propietario - con el mail del propietario
  const page = await Page.findOne({ owner: session.user.email });

  // aca hacemos uso del metodo de mongo - aggregate que es lo que creamos en mongo Atlas , para ir separando 
  const groupedViews = await Event.aggregate([
    // El primer stage, era match - entonces lo envio como parametro - es un objeto y lo envio como tal. 
    {
      $match: {
        type: 'view',
        uri: page?.uri,
      }
    },
    // luego envio el segundo stage que cree, tmb es un objeto dentro de otros objetos. Tengo que basciamente enviar los parametros tal cual los cree
    {
      $group: {
        _id: {
          $dateToString: {
            date: "$createdAt",
            format: "%Y-%m-%d"
          },
        },
        count: {
          "$count": {},
        }
      },
    },
    // aca lo acomodo para que aparexca de menor a mayor -. la primera fecha priemro en el eje x
    {
      $sort: { _id: 1 }
    }
  ]);

  const clicks = await Event.find({
    page: page?.uri,
    type: 'click',
  });

  // Me cuentan la cantidad de vistas y de clicks que tiene cada cosa. 

  // const viewsCount = await Event.countDocuments({
  //   type:'view',
  //   uri: page.uri,
  // })

  // const clicksCount = await Event.countDocuments({
  //   type:'click',
  // links esta como array dentro del objeto page, entonces tengo que acceder. 
  //   uri: page.links.map(l => l.uri),
  // })


  return (
    <div>
      {groupedViews?.length === 0 && (
        <>
          <SectionBox>
            <p className='text-center'>You don't have any page to analyze yet or you don't have any configuration on your page.</p>
          </SectionBox>
        </>
      )}
      {groupedViews?.length > 0 && (
        <>
          <div>
            <SectionBox>
              <h2 className="text-xl mb-6 text-center">Views</h2>
              {/* importo el Chart y le envio la data . el map de todas las view que llamo de la db mongo */}
              <Chart data={groupedViews.map(o => ({
                'date': o._id,
                'views': o.count,
              }))} />
            </SectionBox>
            {/* seccion de los clicks que hicieron en mis links  */}
            <SectionBox>
              <h2 className="text-xl mb-6 text-center">Clicks</h2>
              {/* hago map y traigo el titulo del lin que se toco  */}
              {page.links.map(link => (
                <div key={link.title} className="md:flex gap-4 items-center border-t border-gray-200 py-4">
                  <div className="text-blue-500 pl-4">
                    <FontAwesomeIcon icon={faLink} />
                  </div>
                  <div className="grow">
                    <h3>{link.title || 'no title'}</h3>
                    <p className="text-gray-700 text-sm">{link.subtitle || 'no description'}</p>
                    <a className="text-xs text-blue-400" target="_blank" href="link.url">{link.url}</a>
                  </div>
                  <div className="text-center">
                    <div className="border rounded-md p-2 mt-1 md:mt-0">
                      <div className="text-3xl">
                        {
                          clicks
                            .filter(
                              c => c.uri === link.url
                                && isToday(c.createdAt)
                            )
                            .length
                        }
                      </div>
                      <div className="text-gray-400 text-xs uppercase font-bold">clicks today</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="border rounded-md p-2 mt-1 md:mt-0">
                      <div className="text-3xl">
                        {clicks.filter(c => c.uri === link.url).length}
                      </div>
                      <div className="text-gray-400 text-xs uppercase font-bold">clicks total</div>
                    </div>
                  </div>
                </div>
              ))}
            </SectionBox>
          </div>
        </>
      )}

    </div>
  )
}
