'use client';

// haceos uso de date-fns para modificar las fechas y los formatos mas facil. 
import {addDays, differenceInDays, formatISO9075, parseISO} from "date-fns";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";


export default function Chart({data}) {
    // damos formato a la fecha 
  const xLabelKey = Object.keys(data[0]).find(key => key !== 'date');

//   ponemos estilos a los espacio entre puntos en el eje X - y luego lo pasamos como parametro a LineChart
  const dataWithoutGaps = [];
  data.forEach((value, index) => {
    const date = value.date;
    dataWithoutGaps.push({
      date,
      [xLabelKey]: value?.[xLabelKey] || 0,
    });
    const nextDate = data?.[index + 1]?.date;
    if (date && nextDate) {
      const daysBetween = differenceInDays(
        parseISO(nextDate),
        parseISO(date)
      );
    //   por cada gap entre fechas, formateamos y ponemos la cantidad de dias que pasaron entre vistas 
      if (daysBetween > 0) {
        for (let i = 1; i < daysBetween; i++) {
          const dateBetween = formatISO9075(
            addDays(parseISO(date), i)
          ).split(' ')[0];
          dataWithoutGaps.push({
            date: dateBetween,
            [xLabelKey]: 0,
          })
        }
      }
    }
  });

  return (
    <div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart width={730} height={250} data={dataWithoutGaps}
                   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid horizontal={false} strokeWidth="2" stroke="#f5f5f5" />
          <XAxis dataKey="date" axisLine={false} tickLine={false} tickMargin={10} tick={{fill:'#aaa'}} />
          <YAxis axisLine={false} tickLine={false} tickMargin={10} tick={{fill:'#aaa'}} />
          <Tooltip />
          <Line
            type="monotone" dataKey={xLabelKey} stroke="#09f" strokeWidth="4" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}