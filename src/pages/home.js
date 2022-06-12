import { useAccount, useContractRead, useContractWrite } from 'wagmi'
import { Account, Connect, NetworkSwitcher } from '../components/index'
import Landing from '../components/landing/landing';

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";


const Home = () => {
  const { data } = useAccount()

  return (
    <>
      <Landing />

      {data?.address && (
        <>
          <Account />
          <NetworkSwitcher />
        </>
      )}
    </>
  )
}

export default Home
