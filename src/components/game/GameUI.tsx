
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { RotateCcw, Home } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type GameUIProps = {
  level: number;
  par: number;
  strokes: number;
  power: number; // 0 to 100
  onReset: () => void;
  onGoToLevels: () => void;
};

export function GameUI({ level, par, strokes, power, onReset, onGoToLevels }: GameUIProps) {
  const getPowerColor = () => {
    if (power < 50) return 'bg-green-500';
    if (power < 85) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <TooltipProvider>
      <div className="absolute top-4 left-4 z-10 text-foreground">
        <Card className="bg-background/80 backdrop-blur-sm">
          <CardContent className="p-3 sm:p-4 flex items-center space-x-2 sm:space-x-4">
             <Tooltip>
                <TooltipTrigger asChild>
                   <Button variant="ghost" size="icon" onClick={onGoToLevels} aria-label={"Back to Levels"}>
                      <Home className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Back to Levels</p>
                </TooltipContent>
              </Tooltip>
            <div className="h-10 border-l border-border"></div>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Level</p>
                <p className="text-xl sm:text-2xl font-bold">{level}</p>
              </div>
              <div className="h-10 border-l border-border"></div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Par</p>
                <p className="text-xl sm:text-2xl font-bold">{par}</p>
              </div>
              <div className="h-10 border-l border-border"></div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Strokes</p>
                <p className="text-xl sm:text-2xl font-bold">{strokes}</p>
              </div>
            </div>
             <div className="h-10 border-l border-border"></div>
             <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={onReset} aria-label="Reset Level">
                        <RotateCcw className="h-5 w-5" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Reset Level</p>
                </TooltipContent>
             </Tooltip>
          </CardContent>
        </Card>
      </div>
      <div className="absolute bottom-4 lg:bottom-4 left-1/2 -translate-x-1/2 z-10 w-64 lg:bottom-4 bottom-36">
        <Card className="bg-background/80 backdrop-blur-sm">
          <CardContent className="p-3">
             <label htmlFor="power" className="text-sm font-medium mb-2 block text-center">Power</label>
             <Progress id="power" value={power} indicatorClassName={getPowerColor()} />
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
}
