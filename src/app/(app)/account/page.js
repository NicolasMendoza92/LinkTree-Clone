import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import PageButtonsForm from "@/components/forms/PageButtonsForm";
import PageLinksForm from "@/components/forms/PageLinksForm";
import PageSettingsForm from "@/components/forms/PageSettingsForm";
import UsernameForm from "@/components/forms/UserNameForms";
import { Page } from "@/models/Page";
import mongoose from "mongoose";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import cloneDeep from 'clone-deep';


export default async function AccountPage({searchParams}) {

  const session = await getServerSession(authOptions);

  const desiredUsername = searchParams?.desiredUsername;
  
  if (!session) {
    return redirect('/');
  }
  mongoose.connect(process.env.MONGO_URI);
  const page = await Page.findOne({owner: session?.user?.email});

  // esto lo teng que hacer para sacar el warning the client components from server componentes . El obj page {...} me complicaba, lo pasamos a JSON
  // uso la libreria cloneDeep, como me dijo chatGPT
  const leanPage = cloneDeep(page?.toJSON());
  
  
  if (page) {
    leanPage._id = leanPage._id.toString();
    return (
      <div>
        <PageSettingsForm page={leanPage} user={session.user}/>
        <PageButtonsForm page={leanPage} user={session.user} />
        <PageLinksForm page={leanPage} user={session.user} />
      </div>
    );
  }

  return (
    <div>
       <UsernameForm desiredUsername={desiredUsername} />
    </div>
  );
}