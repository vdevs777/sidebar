import { PageHeader } from "@/components/page-header";
import { Globe } from "lucide-react";

export function NetworkHardwareBackup() {
    return (
        <div>
            <PageHeader path="Network / Hardware /" title="Backup" color="bg-green-400" icon={<Globe />}/>
        </div>
    )
}