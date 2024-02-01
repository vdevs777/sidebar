import { PageHeader } from "@/components/page-header";
import { Calendar } from "lucide-react";

export function SchedulingArchive() {
    return (
        <div>
            <PageHeader path="Agendamento /" title="Arquivo" color="bg-green-400" icon={<Calendar />}/>
        </div>
    )
}