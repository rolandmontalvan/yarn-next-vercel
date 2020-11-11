import Link from 'next/link'

const Index = () => (
  <div className="mt-8 max-w-xl mx-auto px-8">
    <h1 className="text-center">
      <span className="block text-xl text-gray-600 leading-tight">
        Bem vindos ao
      </span>
      <span className="block text-5xl font-bold leading-none">
        Pet Garden Hotel
      </span>
    </h1>
    <div className="mt-12 text-center">
      <Link href="/account-settings/basic-information">
        <a className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg px-6 py-4 leading-tight">
          Realizar Reserva
        </a>
      </Link>
    </div>
  </div>
)

export default Index
