import {
    Calendar,
    DollarSign,
    Globe,
    Layers,
    LayoutTemplate,
    Mail,
    Megaphone,
    Mic,
    PlusCircle,
    ShieldPlus,
    SlidersHorizontal,
    Ticket,
    User
} from "lucide-react";
import { Button } from "../ui/button";
import { SidebarOpenButton } from "./buttons/sidebar-open-button";
import { SidebarSubButton } from "./buttons/sidebar-sub-button";
import { CollapsibleSidebarSubButton } from "./buttons/collapsible-sidebar-sub-button";
import { useNavigate } from "react-router-dom";

export function Sidebar() {
    const navigate = useNavigate()

    function handleNavigate(path: string) {
        navigate(`${path}`)
    }

    return (
        <div className="w-[286px] h-screen bg-white flex flex-col pt-8">
            <Button
                onClick={() => handleNavigate('/')}
                className="w-full h-8 rounded-none flex justify-start gap-4  bg-white text-slate-800 hover:text-white hover:bg-zinc-600">
                <LayoutTemplate strokeWidth="1.5px" width={20} /> Painel
            </Button>
            <section className="pt-2">
                <span className="flex justify-center text-sm font-bold text-purple-500 pb-2">
                    CRM
                </span>
                <SidebarOpenButton
                    icon={<User strokeWidth="1.5px" width={20} />}
                    text="Clientes"
                    iconColor="text-purple-500"
                    hoverBgColor="hover:bg-purple-500"
                >
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-purple-500" text="Adicionar" url="/crm/costumers/add" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-purple-500" text="Pesquisar" url="/crm/costumers/search" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-purple-500" text="Lista" url="/crm/costumers/list" />
                    <CollapsibleSidebarSubButton squareColor="bg-purple-500" text="Vouchers">
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-purple-500" text="Gerar" url="/crm/costumers/vouchers/generate" />
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-purple-500" text="Séries pré-pagas" url="/crm/costumers/vouchers/prepaid-series" />
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-purple-500" text="Pesquisar" url="/crm/costumers/vouchers/search" />
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-purple-500" text="Lista" url="/crm/costumers/vouchers/list" />
                    </CollapsibleSidebarSubButton>
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-purple-500" text="Mapas" url="/crm/costumers/maps" />
                </SidebarOpenButton>
                <SidebarOpenButton
                    icon={<Megaphone strokeWidth="1.5px" width={20} />}
                    text="Leads"
                    iconColor="text-purple-500"
                    hoverBgColor="hover:bg-purple-500"
                >
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-purple-500" text="Painel" url="crm/leads/dashboard" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-purple-500" text="Adicionar líder" url="crm/leads/add-lead" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-purple-500" text="Lista" url="crm/leads/list" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-purple-500" text="Cotas" url="crm/leads/quotes" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-purple-500" text="Mapa" url="crm/leads/maps" />
                </SidebarOpenButton>
                <SidebarOpenButton
                    icon={<Ticket width={20} strokeWidth="1.5px" />}
                    text="Tickets"
                    iconColor="text-purple-500"
                    hoverBgColor="hover:bg-purple-500"
                >
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-purple-500" text="Painel" url="crm/tickets/dashboard" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-purple-500" text="Lista" url="crm/tickets/list" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-purple-500" text="Tickets fechados" url="crm/tickets/closed-tickets" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-purple-500" text="Arquivos" url="crm/tickets/archives" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-purple-500" text="Destinatários" url="crm/tickets/recipients" />
                </SidebarOpenButton>
                <SidebarOpenButton
                    icon={<DollarSign width={20} strokeWidth="1.5px" />}
                    text="Finanças"
                    iconColor="text-purple-500"
                    hoverBgColor="hover:bg-purple-500"
                >
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-purple-500" text="Painel" url="crm/finance/dashboard" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-purple-500" text="Transações" url="crm/finance/transactions" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-purple-500" text="Faturas" url="crm/finance/invoices" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-purple-500" text="Notas de crédito" url="crm/finance/credit-notes" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-purple-500" text="Faturas proforma" url="crm/finance/proforma-invoices" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-purple-500" text="Pagamentos" url="crm/finance/payments" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-purple-500" text="Histórico e visualização" url="crm/finance/history-and-preview" />
                    <CollapsibleSidebarSubButton squareColor="bg-purple-500" text="Extratos de pagamento">
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-purple-500" text="Processando" url="crm/finance/payment-statements/processing" />
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-purple-500" text="Histórico" url="crm/finance/payment-statements/history" />
                    </CollapsibleSidebarSubButton>
                    <CollapsibleSidebarSubButton squareColor="bg-purple-500" text="Recargas de cartão">
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-purple-500" text="Gerar" url="crm/finance/refill-cards/generate" />
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-purple-500" text="Séries" url="crm/finance/refill-cards/series" />
                    </CollapsibleSidebarSubButton>
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-purple-500" text="Custos" url="crm/finance/costs" />
                </SidebarOpenButton>
                <SidebarOpenButton
                    icon={<Mail width={20} strokeWidth="1.5px" />}
                    text="Mensagens"
                    iconColor="text-purple-500"
                    hoverBgColor="hover:bg-purple-500"
                >
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-purple-500" text="Caixa de entrada" url="crm/messages/inbox" />
                    <CollapsibleSidebarSubButton squareColor="bg-purple-500" text="Envio em massa" >
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-purple-500" text="Criar" url="crm/messages/mass-sending/create" />
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-purple-500" text="Histórico" url="crm/messages/mass-sending/history" />
                    </CollapsibleSidebarSubButton>
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-purple-500" text="Novidades" url="crm/messages/news" />
                </SidebarOpenButton>
            </section>
            <section className="pt-2">
                <span className="flex justify-center text-sm font-bold text-green-400 pb-2">
                    COMPANHIA
                </span>
                <SidebarOpenButton
                    icon={<Globe width={20} strokeWidth="1.5px" />}
                    text="Network"
                    iconColor="text-green-400"
                    hoverBgColor="hover:bg-green-400"
                >
                    <CollapsibleSidebarSubButton squareColor="bg-green-400" text="Roteadores">
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-green-400" text="Adicionar" url="company/network/routers/add" />
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-green-400" text="Lista" url="company/network/routers/list" />
                    </CollapsibleSidebarSubButton>
                    <CollapsibleSidebarSubButton squareColor="bg-green-400" text="TR-069 (ACS)">
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-green-400" text="Painel" url="company/network/TR-069/dashboard" />
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-green-400" text="Dispositivos" url="company/network/TR-069/devices" />
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-green-400" text="Arquivos" url="company/network/TR-069/files" />
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-green-400" text="Atualizar lotes" url="company/network/TR-069/upgrade-batches" />
                    </CollapsibleSidebarSubButton>
                    <CollapsibleSidebarSubButton squareColor="bg-green-400" text="Hardware">
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-green-400" text="Adicionar" url="company/network/hardware/add" />
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-green-400" text="Lista" url="company/network/hardware/list" />
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-green-400" text="Backups" url="company/network/hardware/backup" />
                    </CollapsibleSidebarSubButton>
                    <CollapsibleSidebarSubButton squareColor="bg-green-400" text="Redes IPv4">
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-green-400" text="Adicionar" url="company/network/ipv4/add" />
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-green-400" text="Lista" url="company/network/ipv4/list" />
                    </CollapsibleSidebarSubButton>
                    <CollapsibleSidebarSubButton squareColor="bg-green-400" text="Redes IPv6">
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-green-400" text="Adicionar" url="company/network/ipv6/add" />
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-green-400" text="Lista" url="company/network/ipv6/list" />
                    </CollapsibleSidebarSubButton>
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-green-400" text="Mapas" url="company/network/maps" />
                </SidebarOpenButton>
                <SidebarOpenButton
                    icon={<Calendar width={20} strokeWidth="1.5px" />}
                    text="Agendamento"
                    iconColor="text-green-400"
                    hoverBgColor="hover:bg-green-400"
                >
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-green-400" text="Painel" url="company/scheduling/dashboard" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-green-400" text="Projetos" url="company/scheduling/projects" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-green-400" text="Tarefas" url="company/scheduling/tasks" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-green-400" text="Calendários" url="company/scheduling/calendars" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-green-400" text="Mapas" url="company/scheduling/maps" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-green-400" text="Arquivo" url="company/scheduling/archive" />
                </SidebarOpenButton>
                <SidebarOpenButton
                    icon={<Layers width={20} strokeWidth="1.5px" />}
                    text="Inventário"
                    iconColor="text-green-400"
                    hoverBgColor="hover:bg-green-400"
                >
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-green-400" text="Painel" url="company/inventory/dashboard" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-green-400" text="Itens" url="company/inventory/items" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-green-400" text="Produtos" url="company/inventory/products" />
                    <CollapsibleSidebarSubButton squareColor="bg-green-400" text="Fornecimento">
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-green-400" text="Fornecedores" url="company/inventory/supply/suppliers" />
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-green-400" text="Vendedores" url="company/inventory/supply/vendors" />
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-green-400" text="Faturas de fornecedores" url="company/inventory/supply/supplier-invoices" />
                    </CollapsibleSidebarSubButton>
                    <CollapsibleSidebarSubButton squareColor="bg-green-400" text="Relatórios">
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-green-400" text="Itens vendidos e alugados" url="company/inventory/reports/sold-and-rented-items" />
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-green-400" text="Itens" url="company/inventory/reports/items" />
                    </CollapsibleSidebarSubButton>
                </SidebarOpenButton>
                <SidebarOpenButton
                    icon={<Mic width={20} strokeWidth="1.5px" />}
                    text="Voz"
                    iconColor="text-green-400"
                    hoverBgColor="hover:bg-green-400"
                >
                    <CollapsibleSidebarSubButton squareColor="bg-green-400" text="Processamento">
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-green-400" text="Importar CDR" url="company/voice/processing/cdr-import" />
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-green-400" text="Exportar CDR" url="company/voice/processing/cdr-export" />
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-green-400" text="Histórico CDR" url="company/voice/processing/cdr-history" />
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-green-400" text="Erros CDR" url="company/voice/processing/cdr-errors" />
                    </CollapsibleSidebarSubButton>
                    <CollapsibleSidebarSubButton squareColor="bg-green-400" text="Tabelas de taxa">
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-green-400" text="Clientes" url="company/voice/rate-tables/customers" />
                        <SidebarSubButton marginLeft="ml-16" squareColor="bg-green-400" text="Provedores" url="company/voice/rate-tables/providers" />
                    </CollapsibleSidebarSubButton>
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-green-400" text="Categorias" url="company/voice/categories" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-green-400" text="Prefixos" url="company/voice/prefixes" />
                </SidebarOpenButton>
                <SidebarOpenButton
                    icon={<PlusCircle width={20} strokeWidth="1.5px" />}
                    text="Planos de tarifa"
                    iconColor="text-green-400"
                    hoverBgColor="hover:bg-green-400"
                >
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-green-400" text="Internet" url="company/tariff-plans/internet" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-green-400" text="Voz" url="company/tariff-plans/voice" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-green-400" text="Recorrer" url="company/tariff-plans/recurring" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-green-400" text="Vez única" url="company/tariff-plans/one-time" />
                    <SidebarSubButton marginLeft="ml-14" squareColor="bg-green-400" text="Pacotes" url="company/tariff-plans/bundles" />
                </SidebarOpenButton>
            </section>
            <section className="pt-2">
                <span className="flex justify-center text-sm font-bold text-zinc-600 pb-2">
                    SISTEMA
                </span>
                <Button
                    onClick={() => handleNavigate('administration')}
                    className="w-full h-8 rounded-none flex justify-start gap-4  bg-white text-slate-800 hover:text-white hover:bg-zinc-600">
                    <ShieldPlus strokeWidth="1.5px" width={20} /> Admin
                </Button>
                <Button
                    onClick={() => handleNavigate('config')}
                    className="w-full h-8 rounded-none flex justify-start gap-4  bg-white text-slate-800 hover:text-white hover:bg-zinc-600">
                    <SlidersHorizontal strokeWidth="1.5px" width={20} /> Configurações
                </Button>
            </section>
        </div>
    )
}