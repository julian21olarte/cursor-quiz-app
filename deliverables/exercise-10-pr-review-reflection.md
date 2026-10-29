# Reflection (150–300 words)

I used Cursor Agent Mode to wire the existing `formatPercentage` util into `App.jsx`, extend tests, and update README/AGENTS.md—five files, small enough to review in one sitting but not trivial.

Human review caught what automation would partially catch but not prioritize: we still receive `result.percentage` from the API yet render a locally recomputed string. The Agent’s first patch was technically fine if rounding never diverges, but the review forced an explicit comment and a 1/3 rounding test so drift becomes visible in CI rather than in user confusion. That is a design/correctness concern, not a syntax issue.

I approved the test expansion with a comment tying rounding to backend `gradeQuiz`, which the Agent had not documented. I also pushed on product consistency for the personal-best line—showing `8/5 (160%)` style formatting—which Bugbot would not flag because it is not a bug.

Bugbot was unavailable on this local repo. Hypothetically it might have flagged the unused `percentage` field in the render path; it would likely miss the Spanish label versus English numeric format discussion and the “should best score show percent?” decision.

Division of labor: Agent is fast at cross-file wiring and boilerplate tests; human review owns invariants between API and UI, naming/copy choices, and when to add explanatory comments. I would not merge Agent-only PRs without at least one pass focused on data-flow parity and tests that encode business rules—not just happy paths.

After two review-driven commits on the feature branch, I merged locally with `--no-ff` to preserve PR history.
