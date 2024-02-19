"use client"

import FuzzySearch from 'fuzzy-search'
import {useState} from 'react'
import products from './components/products.json'

type Product = {
    code: string
    description: string
    ssp: number
    show: number
    notes: string
}

export default function Home() {
    const [search, setSearch] = useState('')
    const [results, setResults] = useState(products)
    const searchBot = new FuzzySearch(products as Product[], ['code','description'], {
        sort: true,
    })    

    const submitSearch = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        setResults(searchBot.search(search))
    }

    const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
            <div className="z-10 w-5xl w-full items-center justify-between font-mono text-sm">
                <form onSubmit={submitSearch}>
                    <input type="search" value={search} name="search"
                        onChange={e=> updateSearch(e)}
                        placeholder="Search brand or model..."
                        className="w-full px-4 py-2 mt-2 mb-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                    />
                </form>


                {results.map((result) => {
                let description = result.description.split(" - ")

                return (
                    <div className={`m-0 text-sm opacity-50 text-balance my-4`} key={result.code}>
                        <h3 className='text-xl'>{description[0]}</h3>
                        <div>{description[1] ? description[1] : ''}</div>
                            <div className="flex gap-4 border border-gray-500 p-1 my-1" >
                        <span className={result.show ? 'line-through' : 'bold'}>£{result.ssp}</span>
                        <span className={result.show ? 'font-bold' : 'hidden'}>£{Math.round(result.show as number)}</span>
                        </div>
                    </div>
                )
                })
                }
            </div>
        </main>
    );
}
