export function idStringFrom (sourceString: string): string {
    return sourceString.toLowerCase().replace(/[^a-z,\-,0-9]/g, "-")
}