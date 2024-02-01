import { PageHeader } from "@/components/page-header";
import { Layers } from "lucide-react";

export function InventoryProducts() {
    return (
        <div>
            <PageHeader path="Inventário /" title="Produtos" color="bg-green-400" icon={<Layers />}/>
        </div>
    )
}