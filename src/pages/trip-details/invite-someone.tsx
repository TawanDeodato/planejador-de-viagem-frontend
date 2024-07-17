import { Tag, X } from "lucide-react";
import { Button } from "../../components/button";
import { FormEvent } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

interface AddSomeoneProps {
  closeInviteSomeoneModal: () => void;
}

export function AddSomeoneModal({
  closeInviteSomeoneModal,
}: AddSomeoneProps) {
    const { tripId } = useParams()

    async function AddSomeone(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const data = new FormData(event.currentTarget)

        const email = data.get('email')?.toString()

        await api.post(`/trips/${tripId}/invites`, { 
            email,
        })
    }

  return (
    
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Adicionar novo e-mail</h2>
            <button type="button" onClick={closeInviteSomeoneModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
        </div>

        <form onSubmit={AddSomeone} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="text-zinc-400 size-5" />
            <input
              name="email"
              placeholder="E-mail"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <Button variant="primary" size="full">
            Salvar convidados
          </Button>
        </form>
      </div>
    </div>
  );
}
