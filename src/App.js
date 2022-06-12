import { useAccount, useContractRead, useContractWrite } from 'wagmi'
import { Account, Connect, NetworkSwitcher } from './components'

const GREETER = require('./solidity/artifacts/contracts/Greeter.sol/Greeter.json')
const CONTRACT_ABI = GREETER.abi
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";


export function App() {
  const { data } = useAccount()

  // const { data: greet } = useContractRead(
  //   {
  //     addressOrName: CONTRACT_ADDRESS,
  //     contractInterface: CONTRACT_ABI,
  //   },
  //   'gree',
  //   { watch: true },
  // )

  const { data: res, write: setGreeting } = useContractWrite(
    {
      addressOrName: CONTRACT_ADDRESS,
      contractInterface: CONTRACT_ABI,
    },
    'setGreeting',
  )

  const gr = async () => {
    await setGreeting({ args: 'dsfdsfsdfds' })
  }


  return (
    <>
      <Connect />

      {data?.address && (
        <>
          <Account />
          <NetworkSwitcher />
        </>
      )}
      <div><button onClick={gr}>SET</button></div>
    </>
  )
}
