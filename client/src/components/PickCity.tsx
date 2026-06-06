// PickCity.jsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function PickCity({ name = "city", value, onChange }) {
  const [selectedCity, setSelectedCity] = useState(value || "");

  const handleSelect = (city) => {
    setSelectedCity(city);
    if (onChange) onChange(city);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger  asChild>
          <Button variant="outline" className="w-[49%] ml-auto -mt-13">
            {selectedCity || "Pick your city"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => handleSelect("Kabul")}>
            Kabul
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("Herat")}>
            Herat
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("Mazar-e-sharif")}>
            Mazar-e-sharif
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("Kandahar")}>
            Kandahar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      {/* Hidden input that submits with form */}
      <input type="hidden" name={name} value={selectedCity} />
    </>
  );
}