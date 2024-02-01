import { PageHeader } from "@/components/page-header";
import { Globe } from "lucide-react";

export function NetworkMaps() {
    return (
        <div>
            <PageHeader path="Network /" title="Mapas" color="bg-green-400" icon={<Globe />}/>
        </div>
    )
}