import {
  CustomFieldCard,
  type CustomField,
} from "./CustomFieldCard"

const fields: CustomField[] = [
  {
    id: "1",
    name: "Industry",
    type: "Text",
    required: true,
  },
  {
    id: "2",
    name: "Annual Revenue",
    type: "Number",
    required: false,
  },
]

export function CustomFieldsTab() {
  return (
    <div className="space-y-4">
      {fields.map((field) => (
        <CustomFieldCard
          key={field.id}
          field={field}
        />
      ))}
    </div>
  )
}
