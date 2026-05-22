import fs from 'node:fs'
import { parse } from 'csv-parse'

const csvPath = new URL('./streams/tasks.csv', import.meta.url)

const stream = fs.createReadStream(csvPath)// Le o arquivo

const csvParse = parse({//Interpreta o arquivo
    delimiter: ',',
    skipEmptyLines: true,
    fromLine: 2// Pula primeira linha pois é cabecalho
})

async function run() {

    const linesParse = stream.pipe(csvParse)

    for await (const line of linesParse) {//Percorre linha por linha

        const [title, description] = line //Cada linha vira ['Task', 'Descricao']

        await fetch('http://localhost:3333/tasks', {//Faz o POST automatico
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                description
            })
        })

        console.log(`Task criada: ${title}`)
    }
}

run()