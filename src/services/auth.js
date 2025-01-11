import { toast } from "react-toastify";
import { supabase } from "../supabase/supabaseClients";
// REgister User API
export const signUp = async (values) => {
  const { fullName, email, password } = values;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error?.message) {
    toast.error(error.message);
  }

  if (data?.user?.id) {
    const { data: userProfileData, error: userProfileError } = await supabase
      .from("profile")
      .insert([{ email, fullName }])
      .select()
      .single();

    if (userProfileError?.message) {
      toast.error(error.userProfileError);
    }
    return userProfileData;
  }
};
// Get Current User
export const getCurrentUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user && user.id) {
    let { data: profile, error } = await supabase
      .from("profile")
      .select("*")
      .eq("id", user?.id)
      .single();

    if (error) {
      toast.error(error.message);
    }

    return profile;
  }
};
// SignIn API
export const signIn = async (values) => {
  const { email, password } = values;
  const {
    data: { user },
    error,
  } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return toast.error(error.message);
  }

  if (user && user?.id) {
    const { data: profile, error } = await supabase
      .from("profile")
      .select("*")
      .eq("id", user?.id)
      .single();

    if (error) {
      toast.error(error.message);
    }

    return profile;
  }
};
