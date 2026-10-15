
"use client";

import { GitHubContributionGraph } from "github-contrib-graph/react";
import "github-contrib-graph/styles.css";
import { useTheme } from "next-themes";

export default function GithubContribution() {

    const { theme } = useTheme();

    return (
        <section className="w-full min-w-0">

            <div className="w-full min-w-0 overflow-x-auto pb-4">
                <div className="w-full min-w-3xl max-w-none">
                    <GitHubContributionGraph
                        username="Shivansh-Pandey-4"
                        theme={theme === "dark" ? "midnight" : "glacier"}
                        showHeader={true}
                        showFooter={true}
                        showTooltips={true}
                    // className="!w-[760px] !min-w-[760px] !max-w-none"
                    />
                </div>
            </div>
        </section>
    );
}

