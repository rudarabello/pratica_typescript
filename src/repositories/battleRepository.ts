import connection from "../databases/database";

export async function insert(user:string) {
    connection.query(`
    INSERT INTO fighters (username,wins,losses,draws)
    VALUES ($1,0,0,0)`,[user])
}

export async function find(user:string) {
    connection.query(`
    SELECT * FROM fighters
    WHERE username = $1`,[user])
}

export async function updateW(user:string) {
    connection.query(`
    UPDATE fighters
    SET wins = wins + 1
    WHERE username = $1`,[user])
}

export async function updateL(user:string) {
    connection.query(`
    UPDATE fighters
    SET losses = losses + 1
    WHERE username = $1`,[user])
}

export async function updateD(user:string) {
    connection.query(`
    UPDATE fighters
    SET draws = draws + 1
    WHERE username = $1`,[user])
}

export async function ranking(){
    return connection.query(`
    SELECT * FROM fighters
    ORDER BY wins,draws DESC`)
}