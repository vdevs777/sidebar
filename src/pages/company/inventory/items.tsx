import { PageHeader } from "@/components/page-header";
import { Layers } from "lucide-react";

export function InventoryItems() {
    return (
        <div>
            <PageHeader path="Inventário /" title="Itens" color="bg-green-400" icon={<Layers />}/>
        </div>
    )
}