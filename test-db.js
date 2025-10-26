// Test the database connection
// Open browser console and copy/paste these commands

// Test 1: Check if Supabase is loaded
console.log('Supabase client:', window.supabase);

// Test 2: Insert a test guest
async function testInsert() {
    const { data, error } = await window.supabase
        .from('guests')
        .insert([
            { name: 'Test Guest', email: 'test@example.com', num_guests: 2 }
        ])
        .select();
    
    console.log('Insert result:', { data, error });
    return { data, error };
}

// Test 3: Get all guests
async function testSelect() {
    const { data, error } = await window.supabase
        .from('guests')
        .select('*');
    
    console.log('All guests:', { data, error });
    return { data, error };
}

// Run tests (uncomment to run)
// testInsert();
// testSelect();

// Copy these to console to test:
// await testInsert();
// await testSelect();
