import axios from "axios";
import * as battleRep from "../repositories/battleRepository";

function countStars(array:any){
    let sum = 0;
    
    array.forEach((element: { stargazers_count: number; }) => 
        sum += element.stargazers_count
    ); 

    return sum;
}

function error(error:number){
    return {
        type: error
    }
}

export async function battle(firstUser:string, secondUser:string ) {

    if(!firstUser) throw error(422);
    if(!secondUser) throw error(422);

    const user1 = await axios.get(`https://api.github.com/users/${firstUser}/repos`).catch(()=>{
        throw error(404);
    });
    const user2 = await axios.get(`https://api.github.com/users/${secondUser}/repos`).catch(()=>{
        throw error(404);
    });

    const starGaze1 = countStars(user1.data);
    const starGaze2 = countStars(user2.data);

    const check1:any = await battleRep.find(firstUser);
    if(!check1) {
        await battleRep.insert(firstUser)
    }

    const check2:any = await battleRep.find(secondUser);
    if(!check2) {
        await battleRep.insert(secondUser)
    }

    if(starGaze1 > starGaze2){
        await battleRep.updateW(firstUser)
        await battleRep.updateL(secondUser)
        return {
            winner: firstUser, 
            loser: secondUser, 
            draw: false 
        }
    }

    if(starGaze2 > starGaze1){
        await battleRep.updateW(secondUser)
        await battleRep.updateL(firstUser)
        return {
            winner: secondUser, 
            loser: firstUser, 
            draw: false 
        }
    }

    if(starGaze2 === starGaze1){
        await battleRep.updateD(firstUser)
        await battleRep.updateD(secondUser)
        return {
            winner: null, 
            loser: null, 
            draw: true 
        }
    }
}