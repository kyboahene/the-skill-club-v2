import { createClient } from '@/supabase/server';
import { cache } from 'react';

export const useCurrentUser = cache(async () => {
    const { data: { user } } = await createClient().auth.getUser();
    if (!user) {
        return undefined;
    }
    return user;
});