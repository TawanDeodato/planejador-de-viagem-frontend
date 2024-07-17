import { Plus, UserCog } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { AddSomeoneModal } from "./invite-someone";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationAndDateHeader } from "./destination-and-date-header";
import { CreateLinksModal } from "./create-links-modal";
import { Button } from "../../components/button";

export function TripDetailsPage() {

    const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)
    const [isCreateLinksModalOpen, setIsCreateLinksModalOpen] = useState(false)
    const [isAddSomeoneModalopen, setAddSomeoneModalOpen] = useState(false)


    function openInveteGuestsModal() {
        setAddSomeoneModalOpen(true)
    }   
    function closeInviteSomeoneModal() {
        setAddSomeoneModalOpen(false)
    }    
    function openCreateLinksModal() {
        setIsCreateLinksModalOpen(true)
    }   
    function closeCreateLinksModal() {
        setIsCreateLinksModalOpen(false)
    } 
    function openCreateActivityModal() {
        setIsCreateActivityModalOpen(true)
    } 
    function closeCreateActivityModal() {
        setIsCreateActivityModalOpen(false)
    }  

    return (
        <div className="max-w-6xl px-24 py-10 mx-auto space-y-8">
            <DestinationAndDateHeader />

            <main className="flex gap-16 px-4">
                <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="texxt-3xl font-semibold">Atividades</h2>

                        <button onClick={openCreateActivityModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                            <Plus className='size-5' />
                            Cadastrar atividade
                        </button>
                    </div>

                    <Activities />
                </div>

                    <div className="w-80 space-y-6">
                        <ImportantLinks />
                        <Button onClick={openCreateLinksModal} variant="secondary" size="full">
                            <Plus className="size-5"/>
                            Cadastrar novo link
                        </Button>
            
                        <div className="w-full h-px bg-zinc-800" />

                        <Guests />
                        <Button onClick={openInveteGuestsModal} variant="secondary" size="full">
                            <UserCog className="size-5" />
                            Gerenciar convidados
                        </Button>
                    </div>
            </main>

            {isCreateActivityModalOpen && (
                <CreateActivityModal closeCreateActivityModal={closeCreateActivityModal} />
            )} 
            {isCreateLinksModalOpen && (
                <CreateLinksModal closeCreateLinksModal={closeCreateLinksModal} />
            )}
            {isAddSomeoneModalopen && (
                <AddSomeoneModal closeInviteSomeoneModal={closeInviteSomeoneModal} />
            )}
        </div>
    )
}