# Storage Policy Setup - Visual Guide

## Creating the Policies

### Policy 1: Allow Public Uploads

When you click "New policy" in Supabase, fill in the form exactly like this:

```
Policy name: Allow public uploads
Target roles: public
Allowed operations: ☑ INSERT  ☑ UPDATE  ☑ DELETE
USING expression: true
WITH CHECK expression: true
```

**Exact expressions to type:**
- USING: `true`
- WITH CHECK: `true`

Click "Review" then "Save policy"

---

### Policy 2: Allow Public Reads

Click "New policy" again and fill:

```
Policy name: Allow public reads
Target roles: public
Allowed operations: ☑ SELECT
USING expression: true
```

**Exact expression to type:**
- USING: `true`

Click "Review" then "Save policy"

---

## What the expressions do

- `true` = Allow everyone
- Simple as that - no complicated syntax needed!

## After Creating Both Policies

Refresh your browser and try uploading a photo. It should work now!

## Still having issues?

Make sure:
1. ✅ Bucket name is exactly `guest-photos`
2. ✅ Public bucket toggle is ON
3. ✅ Both policies are saved (you should see 2 policies listed)
4. ✅ Browser page is refreshed after saving policies
