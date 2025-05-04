import { AlertCircle, CheckCircle2 } from "lucide-react";

interface AuditResultsProps {
  seoScore: number;
  seoIssues: string[];
  a11yIssues: string[];
}

export function AuditResults({
  seoScore,
  seoIssues,
  a11yIssues,
}: AuditResultsProps) {
  return (
    <div className="space-y-6">
      {/* Score SEO */}
      <div className="glassmorphism p-6 rounded-xl">
        <h3 className="text-lg font-semibold mb-4">Score SEO</h3>
        <div className="flex items-center gap-2">
          {seoScore >= 90 ? (
            <CheckCircle2 className="text-green-500" size={24} />
          ) : (
            <AlertCircle className="text-yellow-500" size={24} />
          )}
          <span className="text-2xl font-bold">{seoScore.toFixed(0)}/100</span>
        </div>
        <p className="text-sm text-gray-400">
          {seoScore >= 90
            ? "Votre site est bien optimisé pour le SEO"
            : "Il y&apos;a des points à améliorer pour le SEO"}
        </p>
      </div>

      {/* Problèmes SEO */}
      {seoIssues.length > 0 && (
        <div className="glassmorphism p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-4">Problèmes SEO</h3>
          <ul className="space-y-2">
            {seoIssues.map((issue, index) => (
              <li key={index} className="flex items-start gap-2">
                <AlertCircle className="text-yellow-500 mt-1" size={16} />
                <span>{issue}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Problèmes d'accessibilité */}
      {a11yIssues.length > 0 && (
        <div className="glassmorphism p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-4">
            Problèmes d&apos;accessibilité
          </h3>
          <ul className="space-y-2">
            {a11yIssues.map((issue, index) => (
              <li key={index} className="flex items-start gap-2">
                <AlertCircle className="text-red-500 mt-1" size={16} />
                <span>{issue}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
