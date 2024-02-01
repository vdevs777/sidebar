import { PageHeader } from "@/components/page-header";
import { Calendar } from "lucide-react";

export function SchedulingDashboard() {
    return (
        <div>
            <PageHeader path="Agendamento /" title="Painel" color="bg-green-400" icon={<Calendar />}/>
        </div>
    )
}