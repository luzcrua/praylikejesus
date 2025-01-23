import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

const languages = [
  { code: "pt", name: "Português" },
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "it", name: "Italiano" },
  { code: "de", name: "Deutsch" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <Globe className="w-4 h-4 text-white" />
      <Select
        defaultValue={i18n.language}
        onValueChange={(value) => i18n.changeLanguage(value)}
      >
        <SelectTrigger className="w-[140px] bg-white/10 border-white/20 text-white">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;