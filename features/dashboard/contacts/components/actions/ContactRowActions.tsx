import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ContactRowActionsProps {
  contactId: string
}

export function ContactRowActions({
  contactId,
}: ContactRowActionsProps) {
  void contactId

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant="ghost"
          size="sm"
        >
          •••
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>
          View Profile
        </DropdownMenuItem>

        <DropdownMenuItem>
          Edit Contact
        </DropdownMenuItem>

        <DropdownMenuItem>
          View Conversations
        </DropdownMenuItem>

        <DropdownMenuItem>
          Assign AI Agent
        </DropdownMenuItem>

        <DropdownMenuItem>
          Add Note
        </DropdownMenuItem>

        <DropdownMenuItem>
          Archive
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
