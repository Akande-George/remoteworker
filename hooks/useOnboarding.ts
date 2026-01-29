import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../lib/axios";
import { AxiosError } from "axios"; // 1. Import AxiosError

// --- Types based on API Documentation ---

// 1. API Response Wrapper
interface ApiResponse<T> {
  event: string;
  status: string;
  message: string;
  data: T;
  errors: Record<string, string[]> | null;
}

// 2. Question Object Structure
export interface OnboardingQuestion {
  question: string;
  text: string;
  answers: {
    type: "single-selection" | "multiple-selection" | "text" | "number";
    labels?: string[];
  };
}

// 3. Payload Structure for Saving Answers
export interface OnboardingAnswerItem {
  question: string;
  answer: string | string[] | number;
}

export interface OnboardingAnswersPayload {
  answers: OnboardingAnswerItem[];
}

// --- Fetch Hook ---

const fetchOnboardingQuestions = async (
  goal?: string,
): Promise<OnboardingQuestion[]> => {
  const res = await axios.get<ApiResponse<OnboardingQuestion[]>>(
    "/api/talent/onboarding/questions",
    {
      params: { goal },
    },
  );
  return res.data.data;
};

export const useOnboardingQuestions = (goal?: string) => {
  return useQuery({
    queryKey: ["onboarding-questions", goal],
    queryFn: () => fetchOnboardingQuestions(goal),
    staleTime: 1000 * 60 * 5,
  });
};

// --- Mutation Hook ---

const storeOnboardingAnswers = async (payload: OnboardingAnswersPayload) => {
  const res = await axios.post<ApiResponse<null>>(
    "/api/talent/onboarding/answers",
    payload,
  );
  return res.data;
};

export const useStoreOnboardingAnswers = () => {
  const queryClient = useQueryClient();

  // 2. Define Generics: <Data, Error, Variables>
  return useMutation<
    ApiResponse<null>, // TData: The success response
    AxiosError<ApiResponse<null>>, // TError: The error type (AxiosError containing our API structure)
    OnboardingAnswersPayload // TVariables: The argument passed to mutate()
  >({
    mutationFn: storeOnboardingAnswers,
    onSuccess: (data) => {
      console.log("Onboarding saved:", data.message);
      // queryClient.invalidateQueries({ queryKey: ["onboarding-questions"] });
    },
    // 3. 'error' is now strictly typed as AxiosError
    onError: (error) => {
      // TypeScript now knows 'error.response.data' exists
      const serverMessage = error.response?.data?.message;
      const fallbackMessage = error.message;

      console.error("Save failed:", serverMessage || fallbackMessage);
    },
  });
};
