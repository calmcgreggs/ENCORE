interface UserProfile {
  UID: string;
  Initial_Score: number;
  Final_Score: number;
  Progress: number;
  Highscore: number;
}

interface Course {
  Name: string;
  ID: number;
  Max_Pages: number;
}

type CardData = {
  card: JSX.Element;
  spam: boolean;
  from: String;
  subject: String;
  cues?: number;
};

type CueType =
  | "SimilarDomain"
  | "ImpersonalGreeting"
  | "SpellingError"
  | "GrammaticError"
  | "Urgency"
  | "PositiveConsequences"
  | "NegativeConsequences"
  | "Nonsense"
  | "MaliciousAttachment";
