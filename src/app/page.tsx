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
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <form onSubmit={submitSearch}>
                    <input type="search" value={search} name="search"
                        onChange={e=> updateSearch(e)}
                        placeholder="Search brand or model..."
                        className="w-full px-4 py-2 mt-2 mb-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                    />
                </form>


                {results.map((result) => (
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`} key={result.code}>
                        {result.description.split(" - ")[0]}
                    </p>
                ))
                }
            </div>
        </main>
    );
}
