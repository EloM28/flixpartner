// pages/api/chart-data.js
import executeQuery from "../../../../../../app/_utils/db";
export async function POST(request){
  const data=await request.json()
    try {
      const Year = new Date().getFullYear();
      const month = new Date().getMonth() + 1; // Months are zero-indexed, so we add 1
  
      const tab = [
        [1, 1, 31],
        [2, 1, 29],
        [3, 1, 31],
        [4, 1, 30],
        [5, 1, 31],
        [6, 1, 30],
        [7, 1, 31],
        [8, 1, 31],
        [9, 1, 30],
        [10, 1, 31],
        [11, 1, 30],
        [12, 1, 31]
      ];
  
      let nomb;
      switch (month) {
        case 1:
          nomb = tab[0][2];
          break;
        case 2:
          nomb = tab[1][2];
          break;
        case 3:
          nomb = tab[2][2];
          break;
        case 4:
          nomb = tab[3][2];
          break;
        case 5:
          nomb = tab[4][2];
          break;
        case 6:
          nomb = tab[5][2];
          break;
        case 7:
          nomb = tab[6][2];
          break;
        case 8:
          nomb = tab[7][2];
          break;
        case 9:
          nomb = tab[8][2];
          break;
        case 10:
          nomb = tab[9][2];
          break;
        case 11:
          nomb = tab[10][2];
          break;
        case 12:
          nomb = tab[11][2];
          break;
        default:
          return Response.json({ error: "Invalid month" });
      }
  
      const tabstat = [];
      const tabday = [];
      let dateLimit = 1;
  
      for (let i = 0; i <= nomb; i++) {
        if (dateLimit <= nomb) {
          let debut, fin;
          if (dateLimit < 10 && month < 10) {
            debut = `${Year}/0${month}/0${dateLimit} 00:00:00`;
            fin = `${Year}/0${month}/0${dateLimit} 23:59:59`;
          } else if (dateLimit < 10) {
            debut = `${Year}/0${month}/0${dateLimit} 00:00:00`;
            fin = `${Year}/0${month}/0${dateLimit} 23:59:59`;
          } else if (month < 10) {
            debut = `${Year}/0${month}/${dateLimit} 00:00:00`;
            fin = `${Year}/0${month}/${dateLimit} 23:59:59`;
          } else {
            debut = `${Year}/${month}/${dateLimit} 00:00:00`;
            fin = `${Year}/${month}/${dateLimit} 23:59:59`;
          }
  
          const [{"count":response}] = await executeQuery(
            `SELECT COUNT(idpublicite) AS count 
             FROM publicite 
             WHERE iduser='${data.id_user}' datecreation BETWEEN '${debut}' AND '${fin}'`
          );
          //const { count } = await response.json();
          tabstat.push(response);
          tabday.push(i+1);
          //console.log(response)
        }
        dateLimit++;
      }
        
      return Response.json({data:tabstat,day:tabday});
    } catch (error) {
      console.error(error);
      return Response.json({ error: 'Internal server error' });
    }
  }