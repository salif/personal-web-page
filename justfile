#!/usr/bin/env -S just -f

this_file := source_file()
this := just_executable() + " -f " + quote(this_file)

_:
    @{{ this }} --list --unsorted

update-theme:
	git submodule update --remote themes/linkita
	zola check --skip-external-links && git add themes/linkita

serve:
	zola serve
