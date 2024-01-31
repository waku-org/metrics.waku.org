import React, {useState, useEffect} from 'react'
import Prometheus from "../utils/prometheus"
import { MdNetworkPing } from "react-icons/md";
import CommunityMetricsCard from "@/components/molecules/CommunityMetricsCard";
import { LuNetwork } from "react-icons/lu";



export default function NetworkMetrics() {

  const [avgPing, setAvgPing] = useState()
  const [connectablePeers, setConnectablePeers] = useState()

  
  useEffect(() => {
    Prometheus.getAvgPing().then((x) => {
      setAvgPing(parseFloat(x))
    })
    Prometheus.getConnectablePeers().then((x) => {
      setConnectablePeers(parseInt(x))
    })
  }, [])

  return (
    <div className=''>
        <div className='flex justify-between items-center'>
            <h1 className='text-2xl'>Network metrics</h1>
            <h1 className='text-[#707071] hidden md:block'>Powered by Waku</h1>
        </div>
          <div className="space-y-5 mt-5 justify-between">
            <CommunityMetricsCard
              title={"Average Ping Response between nodes (ms)"}
              icon={
                <span className="hidden rounded-full bg-gray-100 p-2 text-gray-600 dark:bg-black dark:text-gray-300 sm:block">
                  <MdNetworkPing />
                </span>
              }
              //isLoading={props.isLoading}
              current={avgPing && avgPing.toFixed(2)}
              //previous={props.previous?.data?.stats?.github}
            />
            <CommunityMetricsCard
              title={"Connectable Nodes"}
              icon={
                <span className="hidden rounded-full bg-gray-100 p-2 text-gray-600 dark:bg-black dark:text-gray-300 sm:block">
                  <LuNetwork />
                </span>
              }
              //isLoading={props.isLoading}
              current={connectablePeers}
              //previous={props.previous?.data?.stats?.github}
            />
          </div>

    </div>
  )
}
