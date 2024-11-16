
import executeQuery from "../../../../../_utils/db";
import path from "path";
import { writeFile } from "fs/promises";
import { sign } from 'jsonwebtoken';

export async function POST(request) {
  try {
    const formData = await request.formData();
    console.log(formData);

    const publicite = formData.get('publicite');
    const typepub = formData.get('typepub');
    const typepaiment = formData.get('typepaiment');
    const datedebut = formData.get('datedebut');
    const datefin = formData.get('datefin');
    const nombreclick = formData.get('nombreclick');
    const iduser = formData.get('iduser');
    const status = formData.get('status');
    const nombreview = formData.get('nombreview');
    const nompub = formData.get('nompub');
    const idpaiement = formData.get('idpaiement');
    const datas = {
      publicite: publicite,
      typepub: typepub,
      typepaiment: typepaiment,
      datedebut: datedebut,
      datefin: datefin,
      nombreclick: nombreclick,
      iduser: iduser,
      nombreview: nombreview,
      idpaiement:idpaiement
    };

    const secret = "N33U8477474473";
    const formdatatocken = sign(datas, secret);

    // Check if required data is present
    if (!publicite || !typepub || !iduser || !datedebut) {
      return new Response(JSON.stringify({ message: "manquantes", affiche: "Donnees manquantes" }), {
        status: 400
      });
    }

    // Check if publicite is a File
    if (publicite instanceof File) {
      const buffer = await publicite.arrayBuffer();
      const ext = path.extname(publicite.name);
      const pathName = `./public/images/${nompub}${ext}`;
      const imagename = pathName.split('./public/images/')[1];

      // Write the file
     await writeFile(pathName, Buffer.from(buffer));

      // Execute the database query
     const res = await executeQuery(
        "INSERT INTO publicite (iduser,idpaiement, typepublicite, publicite, typepaiement, nombretype,nombreclic, datedebut, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [iduser,idpaiement, typepub, imagename, typepaiment, nombreview,nombreclick, datedebut, status]
      ); 
      

      if (res) {
        return new Response(JSON.stringify({ message: "correct" }), { status: 200 });
      }
    } else {
        console.log( "publicite is not a file" )
      return new Response(JSON.stringify({ message: "publicite is not a file" }), {
        status: 400
      }); 
    
    } 
  } catch (error) {
    console.error(error);
    return new Response("Erreur du serveur", { status: 500 });
  }
}

export async function GET(request) {
  try {
    const res = await executeQuery("SELECT * FROM publicite");
    return new Response(JSON.stringify(res), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response("Erreur du serveur");
  }
}