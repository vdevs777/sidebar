import { PageHeader } from "@/components/page-header";
import { Globe } from "lucide-react";

export function NetworkHardwareList() {
    return (
        <div>
            <PageHeader path="Network / Hardware /" title="Lista" color="bg-green-400" icon={<Globe />}/>
        </div>
    )
}