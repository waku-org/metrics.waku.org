import axios from "axios";

const promUrl: string = process.env.NEXT_PUBLIC_PROMETHEUS_URL || "https://metrics-proxy.infra.status.im";

export default class Prometheus {
    
    static async getMetric(metric: string) {
        const data = (await axios.get('/' + metric, {baseURL: promUrl})).data
        if (data.status != "success") return NaN
        return data
    }

    static async getAvgPing(): Promise<number> {
        const data = await this.getMetric("avg_ping")
        return data.data.result[0].value[1]
    }

    static async getConnectablePeers(): Promise<number> {
        const data = await this.getMetric("connectable_peers")
        return data.data.result[0].value[1]
    }
}