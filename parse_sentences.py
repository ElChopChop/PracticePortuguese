#!/usr/bin/env python3
"""
Parse Portuguese sentence files and create a JSON structure
"""
import re
import json

def parse_sentences(text):
    """Parse sentences from the text file"""
    sentences = {}
    
    # Split by CD Track headers
    # Pattern: CD(\d+) Track (\d+)
    tracks = re.split(r'(CD\d+ Track \d+)', text)
    
    current_cd = None
    current_track = None
    
    for i, segment in enumerate(tracks):
        # Check if this is a header
        cd_track_match = re.match(r'CD(\d+) Track (\d+)', segment)
        if cd_track_match:
            current_cd = int(cd_track_match.group(1))
            current_track = int(cd_track_match.group(2))
            
            # Initialize structure
            if current_cd not in sentences:
                sentences[current_cd] = {}
            if current_track not in sentences[current_cd]:
                sentences[current_cd][current_track] = []
        elif current_cd and current_track and i > 0:
            # This is the content after a header
            # Extract sentences - format: "Portuguese text. (English translation.)"
            sentence_matches = re.findall(r'([^.()]+?)\.\s*\(([^)]+)\)', segment)
            
            for pt, en in sentence_matches:
                pt = pt.strip()
                en = en.strip().rstrip('.')
                if pt and en and len(pt) > 2:  # Filter out very short matches
                    sentences[current_cd][current_track].append({
                        'portuguese': pt,
                        'english': en
                    })
    
    return sentences

# Read Foundation sentences
with open('Sentences_Foundation.txt', 'r', encoding='utf-8') as f:
    foundation_text = f.read()

# Read Advanced sentences  
with open('Sentences_Advanced.txt', 'r', encoding='utf-8') as f:
    advanced_text = f.read()

# Parse both
foundation_sentences = parse_sentences(foundation_text)
advanced_sentences = parse_sentences(advanced_text)

# Create output structure
output = {
    'foundation': foundation_sentences,
    'advanced': advanced_sentences
}

# Write to JSON file
with open('sentences.json', 'w', encoding='utf-8') as f:
    json.dump(output, f, ensure_ascii=False, indent=2)

# Print statistics
total_foundation_tracks = sum(len(tracks) for tracks in foundation_sentences.values())
total_foundation_sentences = sum(len(sents) for cd in foundation_sentences.values() for sents in cd.values())
total_advanced_tracks = sum(len(tracks) for tracks in advanced_sentences.values())
total_advanced_sentences = sum(len(sents) for cd in advanced_sentences.values() for sents in cd.values())

print("Sentences parsed and saved to sentences.json")
print(f"Foundation: {total_foundation_tracks} tracks, {total_foundation_sentences} sentences")
print(f"Advanced: {total_advanced_tracks} tracks, {total_advanced_sentences} sentences")
