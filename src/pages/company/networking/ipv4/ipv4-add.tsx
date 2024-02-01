import { PageHeader } from "@/components/page-header";
import { Globe } from "lucide-react";

export function NetworkIPv4Add() {
    return (
        <div>
            <PageHeader path="Network / Redes IPv4 /" title="Adiconar" color="bg-green-400" icon={<Globe />}/>
        </div>
    )
}