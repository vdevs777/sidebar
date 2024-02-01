import { PageHeader } from "@/components/page-header";
import { ShieldPlus } from "lucide-react";

export function Admin() {
    return (
        <div>
            <PageHeader title="Administração" color="bg-zinc-700" icon={<ShieldPlus />}/>
        </div>
    )
}