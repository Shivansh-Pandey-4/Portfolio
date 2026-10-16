
"use client";

import { GitHubContributionGraph } from "github-contrib-graph/react";
import "github-contrib-graph/styles.css";
import { useTheme } from "next-themes";

export default function GithubContribution() {

    const { theme } = useTheme();

    return (
        <section className="w-full min-w-0 max-w-full">
            <div className="w-full min-w-0 max-w-full overflow-x-auto pb-4">
                <div className="min-w-[700px]">
                    <GitHubContributionGraph
                        username="Shivansh-Pandey-4"
                        theme={theme === "dark" ? "midnight" : "glacier"}
                        showHeader={true}
                        showFooter={true}
                        showTooltips={true}
                        showThumbnail={false}
                    />
                </div>
            </div>
        </section>
    );
}

