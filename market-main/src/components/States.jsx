const stats = [
    { id: 1, name: 'Angels', value: '10,000+' },
    { id: 2, name: 'PrlPo & Unicorns', value: '300+' },
    { id: 3, name: 'CAGR Returns', value: '117%' },
    { id: 4, name: 'CAGR Returns', value: '117%' },
    { id: 5, name: 'CAGR Returns', value: '117%' },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32 border-2 border-solid mt-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-7 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-2xl leading-7 text-gray-900">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }