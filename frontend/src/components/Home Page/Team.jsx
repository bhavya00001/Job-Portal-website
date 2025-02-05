const people = [
    {
      name: 'Leslie Alexander',
      role: 'Founder',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Tushar Bansal',
      role: 'Co-Founder',
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbhYEP7vVyg4C9Q2bIw7JV14VdWwceVRANfg&s'
    },
    {
      name: 'Srishti Goenka',
      role: 'Chief Officer',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKUnXYp1nY9DWrKJf7f4aTZBlPFWXoELly-Q&s',
    },
    {
      name: 'Alaric Saltzman',
      role: 'Designer Head',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyAcP7IeQSmh-BBGeXX8wMeE0mBEhzwiwnqw&s',
    },
    {
      name: 'Raghav Aggarwal',
      role: 'Buiseness Executive',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWdfj1lYIHuHfM7tQ6GF1ndwRqp6TMhIJJhQ&s',
    },
    {
      name: 'Damini Alhuwalia',
      role: 'Co-Founder',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEeRallp1z7XTgI7wS7Kez1AlOoqruX9bKVA&s',
    },
    // More people...
  ]
  
  export default function Team() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            A team of visionaries driving innovation and excellence, dedicated to shaping the future of careers. 
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  