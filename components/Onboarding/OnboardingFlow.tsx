"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import {
  useOnboardingQuestions,
  useStoreOnboardingAnswers,
} from "@/hooks/useOnboarding"; // Adjust path as needed
import { toast } from "sonner";

const OnboardingFlow = () => {
  // 1. Fetch Questions
  const { data: questions, isLoading: isFetching } = useOnboardingQuestions();

  // 2. State for navigation and answers
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // Optional: Mutation hook for saving later
  const { mutate: saveAnswers, isPending: isSaving } =
    useStoreOnboardingAnswers();

  // Loading State
  if (isFetching) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Loader2 className="animate-spin h-8 w-8 text-[#322FEB]" />
      </div>
    );
  }

  // Safety check if no questions exist
  if (!questions || questions.length === 0) {
    return <div className="text-center pt-10">No questions found.</div>;
  }

  const currentQuestion = questions[currentStep];
  const currentAnswer = answers[currentQuestion.question];
  const isLastQuestion = currentStep === questions.length - 1;

  // Handlers
  const handleSelect = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.question]: value,
    }));
  };

  const handleNext = () => {
    if (!currentAnswer) {
      toast.error("Please select an option to continue.");
      return;
    }

    if (isLastQuestion) {
      // Final submission logic
      const payload = {
        answers: Object.entries(answers).map(([key, value]) => ({
          question: key,
          answer: value,
        })),
      };

      saveAnswers(payload, {
        onSuccess: () => toast.success("Onboarding completed!"),
      });
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  return (
    <div>
      {/* Question Section */}
      <div>
        <div className="sora-semibold text-[24px] md:text-[24px] leading-[32px] md:leading-[40px] pt-8 text-[#161A21] text-center">
          {currentQuestion.text}
        </div>

        <section className="pt-10">
          <RadioGroup
            value={currentAnswer}
            onValueChange={handleSelect}
            className="space-y-4" // Add spacing between options
          >
            {/* Map through the labels provided by the API */}
            {currentQuestion.answers.labels?.map((label, index) => (
              <FieldLabel
                key={`${currentQuestion.question}-${index}`}
                htmlFor={`${currentQuestion.question}-${index}`}
              >
                <Field
                  orientation="horizontal"
                  className="cursor-pointer hover:bg-gray-50 transition-colors p-2 rounded-lg"
                >
                  <RadioGroupItem
                    value={label}
                    id={`${currentQuestion.question}-${index}`}
                  />
                  <FieldContent className="flex-row justify-start items-center">
                    <FieldDescription className="text-[#161A21] text-[16px]">
                      {label}
                    </FieldDescription>
                  </FieldContent>
                </Field>
              </FieldLabel>
            ))}
          </RadioGroup>
        </section>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center gap-4 pt-8">
        <Button
          className="w-[96px]"
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 0 || isSaving}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <Button
          className="px-8 w-[96px] flex items-center justify-center gap-2"
          onClick={handleNext}
          disabled={isSaving}
        >
          {isSaving ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : isLastQuestion ? (
            "Finish"
          ) : (
            <>
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default OnboardingFlow;
