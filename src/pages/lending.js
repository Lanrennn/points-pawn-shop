import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { config } from '../config'
import {
    useConnect,
    useAccount,
    useNetwork,
    useDisconnect,
    useContractRead,
    useContractWrite,
    chain
} from 'wagmi'

const SssssmokinFinance = require('../solidity/artifacts/contracts/SssssmokinFinance.sol/SssssmokinFinance.json')
const CONTRACT_ABI = SssssmokinFinance.abi
const CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3'

const Lending = () => {
    const { data: addedPT, isError: mintError, isLoading: isMintLoading, write: addProvideTokens } = useContractWrite(
        {
            addressOrName: CONTRACT_ADDRESS,
            contractInterface: CONTRACT_ABI,
        },
        'addProvideTokens'
    )

    useEffect(() => {
        Promise.all(config.supportedToken.map((token) => addProvideTokens({ args: token })))
        // const add = async () => await addProvideTokens({ args: [] })
        // add()

    }, [])

    return (
        <div className='Services'>
            <Container>
                lendingService
            </Container>

        </div>
    )
}

export default Lending