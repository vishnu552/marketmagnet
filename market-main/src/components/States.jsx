const stats = [
  { id: 1, name: 'Angel Investors', value: '100+' },
  { id: 2, name: 'Startup', value: '10+' },
  { id: 3, name: 'Commitment', value: '5 Cr+' },
  { id: 4, name: 'Live Campaign', value: '2' },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32 my-5"data-aos="fade-down">
      <h1 className="text-center text-bold text-6xl my-10 text-[#3a41bd]">HubAlt community so far</h1>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-2xl leading-7 text-gray-600 text-bold">{stat.name}</dt>
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