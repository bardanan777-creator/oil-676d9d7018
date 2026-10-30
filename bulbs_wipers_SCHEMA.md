# bulbs_wipers.json schema
Top level: `{ "<fluids_master row_id>": ENTRY, ..., "__models": [MODEL_ENTRY, ...] }`

ENTRY fields: headlight_low, headlight_high, brake_light (strings, verbatim from source),
other_bulbs [{position,type}], front_wipers_driver_mm, front_wipers_passenger_mm, rear_wiper_mm
(integers in mm, or "" = no data; original inches kept in notes), source_title, source_url,
source_page, confidence (manual-verbatim|high|medium-high|medium|low), notes.
Empty string "" always means "not printed / no data"; the portal shows "אין נתון בקטלוג".

## __models (registry-model level keys)
Used where fluids_master rows are brand-wide (model_en='*', e.g. Skoda/Seat/VW/Audi, Mercedes engine families)
and cannot carry model-specific bulb/wiper data. The catalog is NOT split; instead:
MODEL_ENTRY = { tozeret_cd: int | [int], kinuy_re: regex on registry kinuy_mishari (case-insensitive),
                year_from, year_to (shnat_yitzur, inclusive, optional), degem_cd: [..] (optional), data: ENTRY }
Portal lookup order: BW[row_id] first; else first __models entry matching the registry vehicle
(tozeret_cd + kinuy_mishari regex + year range [+ degem_cd]). Only added where official data is printed.
