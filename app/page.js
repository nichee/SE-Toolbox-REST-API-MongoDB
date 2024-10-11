import AddressCardList from '@/components/AddressCardList'
import InputButton from '@/components/InputButton'
import Image from 'next/image'

const Home = () => {
  return (
    <div>
      <InputButton />
      <div className="bg-green-200 flex justify-center pt-8">
        <AddressCardList />
      </div>
    </div>
  )
}

export default Home
