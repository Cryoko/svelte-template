import { createClient } from '@supabase/supabase-js'
const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey)

export const insertMessage = async (message, translation, sender, channel) => {
    const { data, error } = await supabase
        .from("messages")
        .insert([{ original: message, translate: translation, sender: sender, channel: channel}]);
};

export const fetchMessages = async () => {
    const { data, error } = await supabase
        .from("messages")
        .select()
    return data;
};