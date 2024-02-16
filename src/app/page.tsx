import FuzzySearch from 'fuzzy-search'; // Or: var FuzzySearch = require('fuzzy-search');
 
const people = [{
  name: {
    firstName: 'Jesse',
    lastName: 'Bowen',
  },
  state: 'Seattle',
}];
 
const searcher = new FuzzySearch(people, ['name.firstName', 'state'], {
  caseSensitive: true,
});
const result = searcher.search('ess');
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
                    bristol baby
          </p>
      </div>
    </main>
  );
}
